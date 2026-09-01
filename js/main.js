/*
  Renders the page from the content in js/data.js.
  You should not need to edit this file to update site content.
  See js/data.js instead.
*/

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function linkRow(container, links) {
  links.forEach(({ label, href }) => {
    const a = el("a", "hero-link", label);
    a.href = href;
    if (href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    container.appendChild(a);
  });
}

function renderHero() {
  document.getElementById("heroLocation").textContent = PROFILE.location;
  document.getElementById("heroName").textContent = PROFILE.name;
  document.getElementById("heroTagline").textContent = PROFILE.tagline;

  const photo = document.getElementById("heroPhoto");
  photo.src = PROFILE.photo;
  photo.alt = PROFILE.photoAlt;

  const links = [
    { label: "Email " + PROFILE.shortName, href: "mailto:" + PROFILE.email },
    { label: "View LinkedIn", href: PROFILE.linkedin },
    { label: "View GitHub", href: PROFILE.github }
  ];
  linkRow(document.getElementById("heroLinks"), links);
  linkRow(document.getElementById("contactLinks"), links);

  document.getElementById("contactText").textContent =
    "The fastest way to reach me is email. I am based in " + PROFILE.location + ".";

  document.title = PROFILE.name + " | Portfolio";
}

function renderBio() {
  const container = document.getElementById("bioText");
  PROFILE.bio.forEach((paragraph) => {
    container.appendChild(el("p", null, paragraph));
  });
}

function renderExperience() {
  const list = document.getElementById("experienceList");
  EXPERIENCE.forEach((job) => {
    const item = el("li", "timeline-item" + (job.current ? " is-current" : ""));
    item.appendChild(el("p", "timeline-period", job.period));
    item.appendChild(el("h3", "timeline-role", job.role));
    item.appendChild(el("p", "timeline-org", job.org));
    const points = el("ul", "timeline-points");
    job.points.forEach((point) => points.appendChild(el("li", null, point)));
    item.appendChild(points);
    list.appendChild(item);
  });
}

function renderEducation() {
  const list = document.getElementById("educationList");
  EDUCATION.forEach((entry) => {
    const item = el("li", "plain-list-item");
    item.appendChild(el("p", "plain-list-period", entry.period));
    item.appendChild(el("h3", "plain-list-title", entry.program));
    item.appendChild(el("p", "plain-list-org", entry.org));
    if (entry.note) item.appendChild(el("p", "plain-list-note", entry.note));
    list.appendChild(item);
  });
}

function renderFeaturedProjects() {
  const grid = document.getElementById("featuredProjects");
  FEATURED_PROJECTS.forEach((project) => {
    const card = el("article", "project-card");
    card.appendChild(el("h3", null, project.name));
    card.appendChild(el("p", "project-desc", project.description));

    const stack = el("p", "project-stack", project.stack.join(" · "));
    card.appendChild(stack);

    if (project.repo) {
      const link = el("a", "project-link", "View repository");
      link.href = project.repo;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      card.appendChild(link);
    } else {
      card.appendChild(el("span", "project-private", "Private repository"));
    }
    grid.appendChild(card);
  });
}

function renderMoreProjects() {
  const list = document.getElementById("moreProjects");
  MORE_PROJECTS.forEach((project) => {
    const item = el("li", "project-list-item");
    const link = el("a", null, project.name);
    link.href = project.repo;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    item.appendChild(link);
    item.appendChild(el("span", "project-list-meta", project.tag + " · " + project.lang));
    list.appendChild(item);
  });
}

function renderPublications() {
  const list = document.getElementById("publicationsList");
  PUBLICATIONS.forEach((pub) => {
    const item = el("li", "pub-item");
    item.appendChild(el("p", "pub-role", pub.role));
    const title = el("a", "pub-title", pub.title);
    title.href = pub.link;
    title.target = "_blank";
    title.rel = "noopener noreferrer";
    item.appendChild(title);
    item.appendChild(el("p", "pub-venue", pub.venue));
    list.appendChild(item);
  });

  const note = document.getElementById("researchNote");
  note.appendChild(el("p", "research-status", "Current research: " + CURRENT_RESEARCH.status));
  note.appendChild(el("p", null, CURRENT_RESEARCH.description));
  const scholarLink = el("a", "text-link", "View full publication list on Google Scholar");
  scholarLink.href = SCHOLAR_URL;
  scholarLink.target = "_blank";
  scholarLink.rel = "noopener noreferrer";
  note.appendChild(scholarLink);
}

function renderCertifications() {
  const list = document.getElementById("certificationsList");
  CERTIFICATIONS.forEach((cert) => {
    const item = el("li", "cert-item");
    const head = el("div", "cert-head");
    head.appendChild(el("h3", null, cert.name));
    head.appendChild(el("span", "cert-status cert-status-" + cert.status.toLowerCase().replace(/\s+/g, "-"), cert.status));
    item.appendChild(head);
    if (cert.detail) item.appendChild(el("p", "cert-detail", cert.detail));
    if (cert.validity) item.appendChild(el("p", "cert-detail", cert.validity));
    list.appendChild(item);
  });
}

function renderFooter() {
  const year = new Date().getFullYear();
  document.getElementById("footerText").textContent =
    PROFILE.name + " · " + year;
}

function setUpNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function playHeroEntrance() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;
  document.querySelectorAll("[data-enter]").forEach((node, index) => {
    node.style.animationDelay = index * 90 + "ms";
    node.classList.add("enter");
  });
}

function tagHeroForEntrance() {
  ["heroLocation", "heroName", "heroTagline", "heroLinks"].forEach((id) => {
    document.getElementById(id).setAttribute("data-enter", "");
  });
  document.querySelector(".photo-frame").setAttribute("data-enter", "");
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderBio();
  renderExperience();
  renderEducation();
  renderFeaturedProjects();
  renderMoreProjects();
  renderPublications();
  renderCertifications();
  renderFooter();
  setUpNav();
  tagHeroForEntrance();
  playHeroEntrance();
});
