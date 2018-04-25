import React from 'react';
import SiteItem from './siteItem';
import '../content/gameOn.css';
//import ReactDOM from 'react-dom';

class SiteList extends React.Component 
{   
    constructor(props)
    {   super();

        this.state = 
        {   sites : [
                { id: 1, title:"Dynamo Soccer Complex", addressLine1:"9090 East 91st Street", addressLine2:"", city:"Indianapolis",state:"IN", zip:"45858"},
                { id: 2, title:"Disney Sports", addressLine1:"123 Palm Way", addressLine2:"PO 2929", city:"Orlando",state:"FL", zip:"22222"},
            ]
        };
    }

    render() { 
        var siteElements = this.state.sites.map((site, index) =>
        {
            return <SiteItem key={site.id} site={site} />
        });

        return (
        
        <div>
            <ul className="siteList">
                {siteElements}
            </ul>
        </div>
    )}
}
export default SiteList;