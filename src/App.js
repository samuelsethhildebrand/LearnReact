import React from 'react';
import SiteList from './components/siteList';
import SiteDetail from './components/siteDetail';

class App extends React.Component
{ render() { return ( 
    
    <div>
      <h1 className="pageTitle">Soccer Facilities</h1>

      <div className="siteListPanel">
        <SiteList/>
      </div>

      <div className="siteDetailPanel">
        <SiteDetail />
      </div>

    </div>
  
)}
}
export default App;
