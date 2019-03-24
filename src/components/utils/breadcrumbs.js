import * as React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Route from "react-router-dom/es/Route";

const BreadCrumbs = function(match){
  let url = match.match.params.path,
      full = match.match.url,
      text = url.split('/')[0],
      link = !match.match.isExact;
  return <span>
     /&nbsp;{link?<a href={full+'/'}>{text}</a>:<span className='text-dark'>{text}</span>}&nbsp;
    <Route path={`${full}/:path`} component={BreadCrumbs} />
  </span>
};

const BreadCrumbsWrapper = (match) =>
    <Breadcrumb>
      {BreadCrumbs(match)}
    </Breadcrumb>
;

export default BreadCrumbsWrapper;