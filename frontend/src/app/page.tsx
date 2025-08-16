import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";
import { getExperiences, getProjects, getSkills, getProfile } from "../lib/api";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default async function HomePage() {
  // Fetch data server-side; fall back happens inside sections if props missing
  let experiencesData: Awaited<ReturnType<typeof getExperiences>> | null = null;
  let projectsData: Awaited<ReturnType<typeof getProjects>> | null = null;
  let skillsData: Awaited<ReturnType<typeof getSkills>> | null = null;
  let profileData: Awaited<ReturnType<typeof getProfile>> | null = null;
  try {
    [experiencesData, projectsData, skillsData, profileData] =
      await Promise.all([
        getExperiences(),
        getProjects(),
        getSkills(),
        getProfile(),
      ]);
  } catch {
    // Ignore API failures; components will render static content
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header />
      <main className="relative">
        <HeroSection name={profileData?.name} />
        <AboutSection summary={profileData?.summary} />
        <ExperienceSection experiences={experiencesData?.experience} />
        <ProjectsSection projects={projectsData?.projects} />
        <SkillsSection skillsByCategory={skillsData || undefined} />
        <ContactSection
          email={profileData?.contact?.email}
          linkedin={profileData?.contact?.linkedin}
          github={profileData?.contact?.github}
        />
      </main>
      <Footer
        email={profileData?.contact?.email}
        linkedin={profileData?.contact?.linkedin}
        github={profileData?.contact?.github}
      />
    </div>
  );
}
