import React, { ReactNode } from 'react';
import style from './layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style['layout']}>
        {children}
    </div>
  );
}

export default Layout;
