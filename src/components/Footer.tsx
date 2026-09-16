import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-base-borderSoft">
      <div className="container-shell flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-mono text-[12.5px] text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built from scratch.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
