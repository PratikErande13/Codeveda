import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "REST APIs", level: 85 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "UI/UX Design", level: 75 },
        { name: "Figma", level: 70 },
        { name: "Testing", level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <h3 className="font-display font-semibold text-xl mb-6 text-primary">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
