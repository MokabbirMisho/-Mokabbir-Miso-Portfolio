import { useEffect, useState } from "react";

const useScrollSpy = (sectionIds) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveId(visibleSection.target.id);
          window.history.replaceState(null, "", `#${visibleSection.target.id}`);
        }
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};

export default useScrollSpy;
