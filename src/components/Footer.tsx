export default function Footer() {
  return (
    <footer className="w-full bg-cream text-black py-8 px-8 md:px-16 border-t border-black/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-display text-2xl uppercase tracking-tighter">
          YM.
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-center font-body text-[10px] tracking-widest uppercase opacity-60">
          <span>YASH MISHRA</span>
          <span className="hidden md:inline">•</span>
          <span>DEVOPS ENGINEER</span>
          <span className="hidden md:inline">•</span>
          <span>MUMBAI / INDIA</span>
          <span className="hidden md:inline">•</span>
          <span>GOOGLE CYBERSECURITY CERTIFIED</span>
        </div>
        
        <div className="font-body text-[10px] tracking-widest uppercase">
          © 2026
        </div>
      </div>
    </footer>
  );
}
