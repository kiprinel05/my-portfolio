import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Credits from "@/components/Credits";
import CarGame from "@/components/CarGame";
import SkillTree from "@/components/SkillTree";
import ResumeExperience from "@/components/ResumeExperience";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        {/* <CarGame /> */}
        <SkillTree />
        <ResumeExperience />
        <ContactSection />
        {/* <Credits /> */}
      </main>
    </>
  );
}
