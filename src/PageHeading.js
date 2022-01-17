const PageHeading = (props) => {
     return(
          <header>
               {/* props stuff here(maybe some components? some jsx? something to display! ) */}
               {props.children}
               <p>This will appear where you see meee!!</p>
          </header>
     )
}

export default PageHeading;