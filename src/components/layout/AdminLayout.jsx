import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, BookOpen, Menu, X, LogOut, Settings, HelpCircle, DollarSign, Truck, Images } from 'lucide-react';
import { cn } from '../ui/Button';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Admissions', href: '/admin/admissions', icon: <Users className="w-5 h-5" /> },
    { name: 'News Manager', href: '/admin/news', icon: <FileText className="w-5 h-5" /> },
    { name: 'FAQ Manager', href: '/admin/faq', icon: <HelpCircle className="w-5 h-5" /> },
    { name: 'Fee Structure', href: '/admin/fee-structure', icon: <DollarSign className="w-5 h-5" /> },
    { name: 'Transport', href: '/admin/transport', icon: <Truck className="w-5 h-5" /> },
    { name: 'Media Manager', href: '/admin/media', icon: <Images className="w-5 h-5" /> },
    { name: 'Curriculum', href: '/admin/curriculum', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'School Settings', href: '/admin/settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-surface-containerLow flex font-sans">
      
      {/* Sidebar */}
      <aside className={cn(
        "bg-primary text-white transition-all duration-300 flex flex-col fixed inset-y-0 left-0 z-50 md:relative",
        sidebarOpen ? "w-64" : "w-0 md:w-20 overflow-hidden"
      )}>
        <div className="h-16 flex items-center justify-center border-b border-white/10 shrink-0">
           {sidebarOpen ? (
             <Link to="/admin" className="font-serif font-bold text-xl text-white tracking-tight">Pen & Page <span className="text-secondary text-sm ml-1">Admin</span></Link>
           ) : (
             <span className="font-serif font-bold text-xl text-secondary">P&P</span>
           )}
        </div>
        
        <nav className="flex-1 py-6 flex flex-col gap-2 px-3 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-sm transition-colors group",
                  isActive 
                    ? "bg-secondary text-white" 
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
                title={!sidebarOpen ? item.name : ""}
              >
                <div className={cn("shrink-0", isActive ? "text-white" : "group-hover:text-secondary")}>
                  {item.icon}
                </div>
                {sidebarOpen && <span className="font-medium text-sm whitespace-nowrap">{item.name}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="p-3 border-t border-white/10 shrink-0">
           <Link to="/" className="flex items-center gap-3 px-3 py-3 rounded-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors">
              <LogOut className="w-5 h-5 shrink-0" />
              {sidebarOpen && <span className="font-medium text-sm whitespace-nowrap">Exit to Website</span>}
           </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* Topbar */}
        <header className="h-16 bg-surface-lowest ghost-border flex items-center justify-between px-6 shrink-0 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-text-variant hover:text-primary transition-colors focus:outline-none"
            >
              {sidebarOpen ? <X className="w-5 h-5 md:hidden" /> : <Menu className="w-5 h-5" />}
              <Menu className="hidden md:block w-5 h-5" />
            </button>
            <h2 className="font-serif font-bold text-primary hidden sm:block">Admin Portal</h2>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-8 h-8 rounded-full bg-surface-containerLow flex items-center justify-center text-primary hover:bg-surface-containerHighest transition-colors">
               <Settings className="w-4 h-4" />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
              A
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-auto p-6 bg-surface-containerLow">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
}
