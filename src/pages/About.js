function About() {
  return (
   <div>
    <main className="container">
      <br />
     <div className="row g-5">
      <div className="col-md-8">
       <h3 className="pb-4 mb-4 fst-italic border-bottom">From the Firehose</h3>
 
       <article className="blog-post">
        <h2 className="blog-post-title mb-1">Sample blog post</h2>
        <p className="blog-post-meta">
         January 1, 2022 by <a href="/">Mark</a> 
        </p>
 
        <p>
         This blog post shows a few different types of content that’s supported
         and styled with Bootstrap. Basic typography, lists, tables, images,
         code, and more are all supported as expected.
        </p>
        <hr />
        <p>
         This is some additional paragraph placeholder content. It has been
         written to fill the available space and show how a longer snippet of
         text affects the surrounding content. We'll repeat it often to keep the
         demonstration flowing, so be on the lookout for this exact same string
         of text.
        </p>
        <h2>Blockquotes</h2>
        <p>This is an example blockquote in action:</p>
        <blockquote className="blockquote">
         <p>Quoted text goes here.</p>
        </blockquote>
        <p>
         This is some additional paragraph placeholder content. It has been
         written to fill the available space and show how a longer snippet of
         text affects the surrounding content. We'll repeat it often to keep the
         demonstration flowing, so be on the lookout for this exact same string
         of text.
        </p>
        <h3>Example lists</h3>
        <p>
         This is some additional paragraph placeholder content. It's a slightly
         shorter version of the other highly repetitive body text used
         throughout. This is an example unordered list:
        </p>
        <ul>
         <li>First list item</li>
         <li>Second list item with a longer description</li>
         <li>Third list item to close it out</li>
        </ul>
        <p>And this is an ordered list:</p>
 
        <h2>Secret men's elements</h2>
        <p>
         HTML defines a long list of available inline tags, a complete list of
         which can be found on the{" "}
         <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">
          Mozilla Developer Network
         </a>
         .
        </p>
        <ul>
         <li>
          <strong>To bold text</strong>, use{" "}
          <code className="language-plaintext highlighter-rouge">
           &lt;strong&gt;
          </code>
          .
         </li>
         <li>
          <em>To italicize text</em>, use{" "}
          <code className="language-plaintext highlighter-rouge">&lt;em&gt;</code>.
         </li>
         <li>
          Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr>{" "}
          should use{" "}
          <code className="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>,
          with an optional{" "}
          <code className="language-plaintext highlighter-rouge">title</code>{" "}
          attribute for the full phrase.
         </li>
         <li>
          Citations, like <cite>— Mark Otto</cite>, should use{" "}
          <code className="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.
         </li>
         <li>
          <del>Deleted</del> text should use{" "}
          <code className="language-plaintext highlighter-rouge">&lt;del&gt;</code>{" "}
          and <ins>inserted</ins> text should use{" "}
          <code className="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.
         </li>
         <li>
          Superscript <sup>text</sup> uses{" "}
          <code className="language-plaintext highlighter-rouge">&lt;sup&gt;</code>{" "}
          and subscript <sub>text</sub> uses{" "}
          <code className="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.
         </li>
        </ul>
        <p>
         Most of these elements are styled by browsers with few modifications on
         our part.
        </p>
        <h2>Lists</h2>
        <p>
         This is some additional paragraph placeholder content. It has been
         written to fill the available space and show how a longer snippet of
         text affects the surrounding content. We'll repeat it often to keep the
         demonstration flowing, so be on the lookout for this exact same string
         of text.
        </p>
        <h3>Face form</h3>
        <p>
         This is some additional paragraph placeholder content. It has been
         written to fill the available space and show how a longer snippet of
         text affects the surrounding content. We'll repeat it often to keep the
         demonstration flowing, so be on the lookout for this exact same string
         of text.
        </p>
        <pre>
         <code>Example code block</code>
        </pre>
        <p>
         This is some additional paragraph placeholder content. It's a slightly
         shorter version of the other highly repetitive body text used
         throughout.
        </p>
       </article>
 
       <article className="blog-post">
        <h2 className="blog-post-title mb-1">In another countries</h2>
        <p className="blog-post-meta">
         December 23, 2021 by <a href="/">Jacob</a>
        </p>
 
        <p>
         This is some additional paragraph placeholder content. It has been
         written to fill the available space and show how a longer snippet of
         text affects the surrounding content. We'll repeat it often to keep the
         demonstration flowing, so be on the lookout for this exact same string
         of text.
        </p>
        <blockquote>
         <p>
          Longer quote goes here, maybe with some{" "}
          <strong>emphasized text</strong> in the middle of it.
         </p>
        </blockquote>
        <p>
         This is some additional paragraph placeholder content. It has been
         written to fill the available space and show how a longer snippet of
         text affects the surrounding content. We'll repeat it often to keep the
         demonstration flowing, so be on the lookout for this exact same string
         of text.
        </p>
        <h3>For example:</h3>
        <p>And don't forget about tables in these posts:</p>
        <table className="table">
         <thead>
          <tr>
           <th>Person</th>
           <th>Count</th>
           <th>Day</th>
          </tr>
         </thead>
         <tbody>
          <tr>
           <td>Men</td>
           <td>10</td>
           <td>11</td>
          </tr>
          <tr>
           <td>Women</td>
           <td>4</td>
           <td>3</td>
          </tr>
          <tr>
           <td>Children</td>
           <td>7</td>
           <td>9</td>
          </tr>
         </tbody>
         <tfoot>
          <tr>
           <td>Totals</td>
           <td>21</td>
           <td>23</td>
          </tr>
         </tfoot>
        </table>
 
        <p>
         This is some additional paragraph placeholder content. It's a slightly
         shorter version of the other highly repetitive body text used
         throughout.
        </p>
       </article>
 
       <article className="blog-post">
        <h2 className="blog-post-title mb-1">New feature</h2>
        <p className="blog-post-meta">
         December 14, 2021 by <a href="/">Chris</a>
        </p>
 
        <p>
         This is some additional paragraph placeholder content. It has been
         written to fill the available space and show how a longer snippet of
         text affects the surrounding content. We'll repeat it often to keep the
         demonstration flowing, so be on the lookout for this exact same string
         of text.
        </p>
        <ul>
         <li>First list item</li>
         <li>Second list item with a longer description</li>
         <li>Third list item to close it out</li>
        </ul>
        <p>
         This is some additional paragraph placeholder content. It's a slightly
         shorter version of the other highly repetitive body text used
         throughout.
        </p>
       </article>
 
      </div>
 
      <div className="col-md-4">
       <div className="position-sticky" style={{top: '6rem'}}>
        <div className="p-4 mb-3 bg-light rounded">
         <h4 className="fst-italic" style={{borderRadius: '15px'}}>What's the style</h4>
         <p className="mb-0">
          Customize this section to tell your visitors a little bit about your
          publication, writers, content, or something else entirely. Totally up
          to you.
         </p>
        </div>
 
        <div className="p-4">
         <h4 className="fst-italic">Archive place</h4>
         <ol className="list-unstyled mb-0">
          <li>
           <a href="/">March 2022</a>
          </li>
          <li>
           <a href="/">February 2022</a>
          </li>
          <li>
           <a href="/">January 2022</a>
          </li>
          <li>
           <a href="/">December 2021</a>
          </li>
          <li>
           <a href="/">November 2021</a>
          </li>
          <li>
           <a href="/">October 2021</a>
          </li>
          <li>
           <a href="/">September 2021</a>
          </li>
          <li>
           <a href="/">August 2021</a>
          </li>
          <li>
           <a href="/">July 2021</a>
          </li>
          <li>
           <a href="/">June 2021</a>
          </li>
          <li>
           <a href="/">May 2021</a>
          </li>
          <li>
           <a href="/">April 2021</a>
          </li>
         </ol>
        </div>
 
        <div className="p-4">
         <h4 className="fst-italic">Elsewhere</h4>
         <ol className="list-unstyled">
          <li>
           <a href="/">GitHub</a>
          </li>
          <li>
           <a href="/">Twitter</a>
          </li>
          <li>
           <a href="/">Facebook</a>
          </li>
         </ol>
        </div>
       </div>
      </div>
     </div>
    </main>
   </div>
  );
 }
 
 export default About;
 