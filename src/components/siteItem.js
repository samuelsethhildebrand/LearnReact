import React from 'react';
import CircularJSON from 'circular-json';

class SiteItem extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            site: props.site
        }
    }

    onSiteClicked = (e) =>
    {
        //this.props.selectedSiteId = e.id;
        alert(CircularJSON.stringify(e));      
    }

    render()
    {   var site = this.state.site;        
        return (
            <li className="siteItem">
                <div id={site.id} onClick={this.onSiteClicked}> 
                    <div><strong>{site.title}</strong></div>
                    <div>{site.addressLine1}</div>
                    { (site.addressLine2 && site.addressLine2 !== '')
                        ? <div>{site.addressLine2}</div>
                        : ''
                    }
                    <div>{site.city}, {site.state}  {site.zip}</div>
                    <div>{this.state.note}</div>
                </div>
                <br/>                
            </li>
        );
    }
}
export default SiteItem;