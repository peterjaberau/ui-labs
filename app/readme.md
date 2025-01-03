# Route Approaches

## Admin panel Layout

### By Pages:

```html
<!-- 
  Path = 
    - /:lang/dashboard/analysis  
 
  Layer1:
    - path= /
    - page= modules/root/route.tsx
    - role= html root + css + scripts
    <html/> <ClientOnly/>  <Outlet/>
      
         
    
    
    Layer2:
    - path= /
    - page= modules/root/route.tsx
    - role= html root + css + scripts
    <html/> <ClientOnly/>  <Outlet/>
      
    
    
  
 
 
 -->



<modules-root-route.tsx>
  <html>
      <ClientOnly>
        <Outlet>  
      </ClientOnly>
  <html>
   
    
        <!-- only has Route as children. it does nothing -->
        <modules-layout-admin-index.tsx>
          <Route/>
        </modules-layout-admin-index.tsx>
    
    
        <!-- 
          - loads and render the layout frame and common areas (header, side, footer)
          - includes fetching user info to display or redirect to login
         -->
        <modules-layout-admin-route.tsx>
            <Outlet />
        </modules-layout-admin-route.tsx>
  
  </Outlet>
</modules-root-route.tsx>




```



- **/modules/root/route.ts*** (css, cookies, html root and scripts)
    - **_Outlet_***
 
      - **/modules/layout/admin/index.tsx*** _(renders only `<Router/>` tag)_
      - 
      - 

- **modules/admin/route.ts** (for loading css, root html and clientside scripts from cookies)
- 
    


    - **modules/root/route.ts** (for loading css, root html and clientside scripts from cookies)

        - **modules/layout/root.tsx** (for loading root html and clientside scripts)

