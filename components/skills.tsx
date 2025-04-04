"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      skills: [
        { name: "Flutter", level: 90 },
        //{ name: "Firebase", level: 85 },
        { name: "React / Next.js", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Node.js", level: 70 }
      ],
    },
    {
      title: "UI/UX Designing",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Wireframing & Prototyping", level: 80 },
        { name: "Design Systems", level: 70 },
        { name: "Canva", level: 50 }
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "Docker", level: 70 },
        { name: "VS Code / Android Studio", level: 80 }
      ],
    }    
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiencies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={`${category.title}-${skill.name}`}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
