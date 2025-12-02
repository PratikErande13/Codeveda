import { useState, useCallback, useEffect } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButton from "./CalculatorButton";
import CalculatorHistory from "./CalculatorHistory";
import { FlaskConical, Calculator as CalcIcon } from "lucide-react";

interface HistoryItem {
  expression: string;
  result: string;
  id: number;
}

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [hasCalculated, setHasCalculated] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isScientific, setIsScientific] = useState(false);

  const calculate = useCallback((expr: string): string | null => {
    if (!expr) return null;
    try {
      let sanitized = expr
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/%/g, "/100")
        .replace(/√\(/g, "Math.sqrt(")
        .replace(/sin\(/g, "Math.sin(Math.PI/180*")
        .replace(/cos\(/g, "Math.cos(Math.PI/180*")
        .replace(/tan\(/g, "Math.tan(Math.PI/180*")
        .replace(/\^/g, "**")
        .replace(/π/g, "Math.PI")
        .replace(/e(?![x])/g, "Math.E");
      
      const evalResult = Function('"use strict"; return (' + sanitized + ')')();
      
      if (!isFinite(evalResult)) return "Error";
      
      return Number.isInteger(evalResult) 
        ? evalResult.toString() 
        : parseFloat(evalResult.toFixed(10)).toString();
    } catch {
      return "Error";
    }
  }, []);

  const handleButtonClick = useCallback((value: string) => {
    if (value === "C") {
      setExpression("");
      setResult("");
      setHasCalculated(false);
      return;
    }

    if (value === "⌫") {
      if (hasCalculated) {
        setExpression(result);
        setResult("");
        setHasCalculated(false);
      } else {
        const funcPatterns = [/sin\($/, /cos\($/, /tan\($/, /√\($/];
        let newExpr = expression;
        let matched = false;
        
        for (const pattern of funcPatterns) {
          if (pattern.test(expression)) {
            newExpr = expression.replace(pattern, "");
            matched = true;
            break;
          }
        }
        
        if (!matched) {
          newExpr = expression.slice(0, -1);
        }
        
        setExpression(newExpr);
      }
      return;
    }

    if (value === "=") {
      if (!expression) return;
      const calculatedResult = calculate(expression);
      if (calculatedResult) {
        setResult(calculatedResult);
        setHasCalculated(true);
        
        if (calculatedResult !== "Error") {
          setHistory(prev => [
            { expression, result: calculatedResult, id: Date.now() },
            ...prev.slice(0, 9)
          ]);
        }
      }
      return;
    }

    const scientificFuncs = ["sin", "cos", "tan", "√"];
    if (scientificFuncs.includes(value)) {
      if (hasCalculated) {
        setExpression(value + "(");
        setResult("");
        setHasCalculated(false);
      } else {
        setExpression(prev => prev + value + "(");
      }
      return;
    }

    if (hasCalculated) {
      const operators = ["+", "-", "×", "÷", "^"];
      if (operators.includes(value)) {
        setExpression(result + value);
      } else if (value === "(" || value === ")") {
        setExpression(value);
      } else {
        setExpression(value);
      }
      setResult("");
      setHasCalculated(false);
    } else {
      const lastChar = expression.slice(-1);
      const operators = ["+", "-", "×", "÷", ".", "^"];
      if (operators.includes(value) && operators.includes(lastChar)) {
        setExpression(prev => prev.slice(0, -1) + value);
      } else {
        setExpression(prev => prev + value);
      }
    }
  }, [expression, result, hasCalculated, calculate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      
      if (/^[0-9+\-*/.=%^()]$/.test(key) || key === "Enter" || key === "Backspace" || key === "Escape") {
        e.preventDefault();
      }

      if (/^[0-9]$/.test(key)) {
        handleButtonClick(key);
        return;
      }

      const keyMap: Record<string, string> = {
        "+": "+",
        "-": "-",
        "*": "×",
        "x": "×",
        "X": "×",
        "/": "÷",
        ".": ".",
        "%": "%",
        "^": "^",
        "(": "(",
        ")": ")",
        "Enter": "=",
        "=": "=",
        "Backspace": "⌫",
        "Delete": "C",
        "Escape": "C",
      };

      if (keyMap[key]) {
        handleButtonClick(keyMap[key]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleButtonClick]);

  const handleHistoryClick = useCallback((item: HistoryItem) => {
    setExpression(item.expression);
    setResult(item.result);
    setHasCalculated(true);
  }, []);

  const handleClearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const basicButtons = [
    { value: "C", variant: "clear" as const },
    { value: "⌫", variant: "default" as const },
    { value: "%", variant: "operator" as const },
    { value: "÷", variant: "operator" as const },
    { value: "7", variant: "default" as const },
    { value: "8", variant: "default" as const },
    { value: "9", variant: "default" as const },
    { value: "×", variant: "operator" as const },
    { value: "4", variant: "default" as const },
    { value: "5", variant: "default" as const },
    { value: "6", variant: "default" as const },
    { value: "-", variant: "operator" as const },
    { value: "1", variant: "default" as const },
    { value: "2", variant: "default" as const },
    { value: "3", variant: "default" as const },
    { value: "+", variant: "operator" as const },
    { value: "0", variant: "default" as const, span: 2 },
    { value: ".", variant: "default" as const },
    { value: "=", variant: "equal" as const },
  ];

  const scientificButtons = [
    { value: "C", variant: "clear" as const },
    { value: "⌫", variant: "default" as const },
    { value: "(", variant: "default" as const },
    { value: ")", variant: "default" as const },
    { value: "sin", variant: "scientific" as const },
    { value: "cos", variant: "scientific" as const },
    { value: "tan", variant: "scientific" as const },
    { value: "÷", variant: "operator" as const },
    { value: "√", variant: "scientific" as const },
    { value: "^", variant: "scientific" as const },
    { value: "π", variant: "scientific" as const },
    { value: "×", variant: "operator" as const },
    { value: "7", variant: "default" as const },
    { value: "8", variant: "default" as const },
    { value: "9", variant: "default" as const },
    { value: "-", variant: "operator" as const },
    { value: "4", variant: "default" as const },
    { value: "5", variant: "default" as const },
    { value: "6", variant: "default" as const },
    { value: "+", variant: "operator" as const },
    { value: "1", variant: "default" as const },
    { value: "2", variant: "default" as const },
    { value: "3", variant: "default" as const },
    { value: "%", variant: "operator" as const },
    { value: "0", variant: "default" as const },
    { value: ".", variant: "default" as const },
    { value: "=", variant: "equal" as const, span: 2 },
  ];

  const buttons = isScientific ? scientificButtons : basicButtons;

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
      {/* Calculator */}
      <div className="glass rounded-[2rem] p-6 shadow-2xl w-[320px]" style={{ boxShadow: 'var(--shadow-soft), var(--shadow-glow)' }}>
        {/* Mode Toggle */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
            {isScientific ? "Scientific" : "Basic"}
          </span>
          <button
            onClick={() => setIsScientific(!isScientific)}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
              transition-all duration-300 ease-out
              ${isScientific 
                ? "bg-accent text-accent-foreground" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }
            `}
          >
            {isScientific ? (
              <FlaskConical className="w-3.5 h-3.5" />
            ) : (
              <CalcIcon className="w-3.5 h-3.5" />
            )}
            <span>{isScientific ? "SCI" : "STD"}</span>
          </button>
        </div>

        <CalculatorDisplay expression={expression} result={result} />
        
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, index) => (
            <CalculatorButton
              key={`${isScientific ? 'sci' : 'basic'}-${index}`}
              value={btn.value}
              onClick={handleButtonClick}
              variant={btn.variant}
              span={btn.span}
            />
          ))}
        </div>

        {/* Keyboard hint */}
        <div className="mt-5 pt-4 border-t border-border/20 text-center">
          <p className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">
            ⌨️ Keyboard supported
          </p>
        </div>
      </div>

      {/* History Panel */}
      <div className="w-[280px]">
        <CalculatorHistory 
          history={history} 
          onItemClick={handleHistoryClick}
          onClear={handleClearHistory}
        />
      </div>
    </div>
  );
};

export default Calculator;
