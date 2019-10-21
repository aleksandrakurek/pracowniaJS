import React from 'react';
import * as P from './parts';
import Link from 'components/Link';
import { graphql, StaticQuery } from 'gatsby';

export default props => (
  <StaticQuery
    query={graphql`
      query($id: String) {
       wordpressPost(id: { eq: $id }) {
         id
         title
         slug
        }
       }
    `}
    render={data => <Breadcrumbs data={data} {...props} />
    }
  />
)

const Breadcrumbs = ({ data: { wordpressPost: post } }) => {
  return (
    <P.Wrapper>
      <Link to="/stories">
        <P.Item active>
          Stories
        </P.Item>
      </Link>
      <P.Span> / </P.Span>
      <P.Item>
        {post.title}
      </P.Item>
    </P.Wrapper>
  );
};