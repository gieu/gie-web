import React from "react";
import {
  AboutSection,
  // ArticlesSection,
  // ContactSection,
  // HeroSection,
  InterestsSection,
  Page,
  // ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function AcercaPage() {
  return (
    <>
      <Seo title="Grupo Informática educativa" />
      <Page useSplashScreenAnimation>
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <InterestsSection sectionId="details" heading="Details" />
      </Page>
    </>
  );
}
