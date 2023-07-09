import babel from '../../assets/icons/babel.svg';
import bootstrap from '../../assets/icons/bootstrap5.svg';
import css from '../../assets/icons/css.svg';
import figma from '../../assets/icons/figma.svg';
import git from '../../assets/icons/git.svg';
import gitlab from '../../assets/icons/gitlab.svg';
import html from '../../assets/icons/html5.svg';
import jest from '../../assets/icons/jest.svg';
import javascript from '../../assets/icons/js.svg';
import mongodb from '../../assets/icons/mongodb.svg';
import node from '../../assets/icons/nodejs.svg';
import npm from '../../assets/icons/npm.svg';
import postfresql from '../../assets/icons/postfresql.svg';
import postman from '../../assets/icons/postman.svg';
import ps from '../../assets/icons/ps.svg';
import react from '../../assets/icons/reactjs.svg';
import sass from '../../assets/icons/sass.svg';
import semanticUi from '../../assets/icons/semantic-ui.svg';
import tailwind from '../../assets/icons/tailwind.svg';
import vs from '../../assets/icons/vs.svg';
import './skills.css';


const Skills = () => {

  const icon = [ babel, bootstrap, css, figma, git, gitlab, html, jest, javascript, mongodb, node, npm, postfresql, postman, ps, react, sass, semanticUi, tailwind, vs ]
  const iconSize = 150;


  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 7
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // }

  return (
    <section id='skills'>
    <div className='skills-container'>
    <div className='skills-header'>
      <h1>Skills</h1>
      <h3>Here are some of the technologies I have worked with</h3>
    </div>
      <div className='skills-row'>
        <div>
          <div className='skills-content'>
            <div className='skills-slider'>
            {icon.map((iconSrc, index) => (
              <div className='skill'>
                <img src={iconSrc} style={{ width: iconSize, height: iconSize }} alt={`Icon ${index}`} />
              </div>
            ))}      
          </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}


export default Skills