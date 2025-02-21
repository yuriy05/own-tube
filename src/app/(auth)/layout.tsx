interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <div className="flex items-center justify-center min-h-screen">{children}</div>;
}

export default Layout;
