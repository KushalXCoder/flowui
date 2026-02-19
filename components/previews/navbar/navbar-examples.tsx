import { Navbar, NavbarContent, NavbarItem, NavbarLogo, NavbarLogoText } from "@/registry/flowui/blocks/navbar/navbar";

// ─────────────────────────────────────────────────────────────────
// Example 1: Clean SaaS / App Navbar
// NavbarItem used as="a" directly — no nested anchor tags.
// ─────────────────────────────────────────────────────────────────

export const SaaSNavbar = () => {
  return (
    <Navbar className="px-6 py-4 border-b border-zinc-100 bg-white">
      <NavbarLogo href="/" className="gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2L14 13H2L8 2Z" fill="white" />
          </svg>
        </div>
        <NavbarLogoText className="font-semibold text-zinc-900 text-base tracking-tight">
          Acme
        </NavbarLogoText>
      </NavbarLogo>

      <NavbarContent>
        <NavbarItem as="a" href="/features" className="text-zinc-500 hover:text-zinc-900 transition-colors">
          Features
        </NavbarItem>
        <NavbarItem as="a" href="/pricing" className="text-zinc-500 hover:text-zinc-900 transition-colors">
          Pricing
        </NavbarItem>
        <NavbarItem as="a" href="/docs" className="text-zinc-500 hover:text-zinc-900 transition-colors">
          Docs
        </NavbarItem>
        <NavbarItem as="a" href="/login" className="text-zinc-600 hover:text-zinc-900 transition-colors">
          Log in
        </NavbarItem>
        <NavbarItem
          as="a"
          href="/signup"
          className="px-4 py-1.5 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-medium transition-colors"
        >
          Get started
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}


// ─────────────────────────────────────────────────────────────────
// Example 2: Dark Editorial / Portfolio Navbar
// NavbarLogo as="div" (no href needed), NavbarItem as="a" for links.
// ─────────────────────────────────────────────────────────────────

export const EditorialNavbar = () => {
  return (
    <Navbar className="px-8 py-5 bg-zinc-950 border-b border-white/10">
      <NavbarLogo as="div" className="gap-3">
        <div className="w-8 h-8 rounded-sm border border-white/20 flex items-center justify-center">
          <NavbarLogoText className="text-white font-bold text-sm tracking-widest uppercase">
            JD
          </NavbarLogoText>
        </div>
        <NavbarLogoText className="text-white/80 text-sm tracking-[0.2em] uppercase font-light">
          Jane Doe
        </NavbarLogoText>
      </NavbarLogo>

      <NavbarContent className="gap-8">
        <NavbarItem as="a" href="/work" className="text-white/50 hover:text-white text-xs tracking-[0.15em] uppercase transition-colors">
          Work
        </NavbarItem>
        <NavbarItem as="a" href="/about" className="text-white/50 hover:text-white text-xs tracking-[0.15em] uppercase transition-colors">
          About
        </NavbarItem>
        <NavbarItem as="a" href="/writing" className="text-white/50 hover:text-white text-xs tracking-[0.15em] uppercase transition-colors">
          Writing
        </NavbarItem>
        <NavbarItem
          as="a"
          href="/contact"
          className="pl-8 border-l border-white/10 text-white text-xs tracking-[0.15em] uppercase hover:opacity-70 transition-opacity"
        >
          Contact →
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}


// ─────────────────────────────────────────────────────────────────
// Example 3: E-commerce / Store Navbar
// Mix of NavbarItem as="a" for links and as="button" for icon actions.
// ─────────────────────────────────────────────────────────────────

export const StoreNavbar = () => {
  return (
    <Navbar className="px-6 py-3.5 bg-white border-b border-stone-200">
      <NavbarLogo href="/" className="gap-1.5">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect width="22" height="22" rx="4" fill="#1c1917" />
          <path d="M6 16L11 7L16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <NavbarLogoText className="font-bold text-stone-900 text-base tracking-tight">
          Forma
        </NavbarLogoText>
      </NavbarLogo>

      {/* Center links — NavbarItem as="a" directly */}
      <NavbarContent className="gap-6">
        <NavbarItem as="a" href="/new" className="text-stone-600 hover:text-stone-900 transition-colors">
          New
        </NavbarItem>
        <NavbarItem as="a" href="/shop" className="text-stone-600 hover:text-stone-900 transition-colors">
          Shop
        </NavbarItem>
        <NavbarItem as="a" href="/collections" className="text-stone-600 hover:text-stone-900 transition-colors">
          Collections
        </NavbarItem>
        <NavbarItem as="a" href="/sale" className="text-red-600 hover:text-red-700 transition-colors font-medium">
          Sale
        </NavbarItem>
      </NavbarContent>

      {/* Right side — NavbarItem as="button" for icon actions, no wrapper needed */}
      <NavbarContent className="gap-5">
        <NavbarItem
          as="button"
          aria-label="Search"
          className="text-stone-500 hover:text-stone-900 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="8" cy="8" r="5.5" />
            <path d="M12.5 12.5L16 16" />
          </svg>
        </NavbarItem>
        <NavbarItem
          as="button"
          aria-label="Account"
          className="text-stone-500 hover:text-stone-900 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="9" cy="6" r="3" />
            <path d="M2.5 16c0-3.314 2.91-6 6.5-6s6.5 2.686 6.5 6" />
          </svg>
        </NavbarItem>
        <NavbarItem
          as="button"
          aria-label="Cart"
          className="relative text-stone-500 hover:text-stone-900 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 1h2.5l1.9 9.4a1 1 0 0 0 1 .8h7.2a1 1 0 0 0 1-.8L16 5H4" />
            <circle cx="7" cy="15.5" r="1" fill="currentColor" stroke="none" />
            <circle cx="13" cy="15.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-stone-900 text-white text-[10px] rounded-full flex items-center justify-center font-medium">
            2
          </span>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}