import BlogLayout from '@theme-original/BlogLayout';
import Heading from '@theme/Heading';
import {useLocation} from '@docusaurus/router';

export default function BlogLayoutWithTitle(props) {
  const {pathname} = useLocation();
  return (
    <BlogLayout {...props}>
      {pathname.replace(/\/$/, '') === '/blog' && <Heading as="h1">ClinicEdge updates</Heading>}
      {props.children}
    </BlogLayout>
  );
}
