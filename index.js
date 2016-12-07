import React, { Component } from 'react';
import { render } from 'react-dom';
import ScrollArea from 'react-scrollbar';

const scrollAreaStyles = {
  height: 500,
  width: 500
}

const scrollbarStyles = {
  border: 5
}

class Test extends Component {

  componentDidUpdate() {
    /* scrollbar hack:
       refresh doesn't work when immediately invoked after render so that */
    setTimeout( () => {
      this.scrollAreaNode.scrollArea.refresh()
    }, 100 )
  }

  render () {

    console.log( 'width?', window.innerWidth, window.innerHeight, 'test?' );

    if ( window.innerWidth < 1224 ) {
      scrollAreaStyles.width = window.innerWidth;
    }

    console.log( scrollAreaStyles );

    return(
      <div>
        <ScrollArea
          speed={0.8}
          className="area"
          contentClassName="content"
          contentStyle={scrollAreaStyles}
          horizontalScrollbarStyle={scrollbarStyles}
          horizontalContainerStyle={scrollbarStyles}
          verticalScrollbarStyle={scrollbarStyles}
          verticalContainerStyle={scrollbarStyles}
          smoothScrolling= {true}
          minScrollSize={40}
          ref={( node ) => { this.scrollAreaNode = node }}
          >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend condimentum magna in lobortis. Ut tempus gravida lectus non elementum. Nam sed elementum orci. Sed placerat quam ac viverra hendrerit. Cras lacinia posuere magna in dapibus. Donec a ullamcorper leo. Pellentesque non efficitur enim. Praesent sapien metus, varius sed mauris sed, tristique consequat mi. Praesent sem massa, viverra id gravida sed, interdum eu est. Aenean quis pellentesque mauris. Maecenas vulputate sed elit ac lacinia. Integer erat eros, accumsan vitae gravida ac, dapibus non orci. Duis ultricies eros id justo consectetur viverra. Nunc non porta felis, sit amet scelerisque enim. Vivamus sit amet auctor lorem. Pellentesque aliquet diam a mauris porttitor venenatis.

            Pellentesque scelerisque lorem metus, sit amet varius libero mollis volutpat. Ut luctus mollis libero, et volutpat odio vehicula a. Nam posuere lectus nunc, ut tincidunt massa bibendum a. Maecenas sed eros dictum, tincidunt metus id, fermentum odio. Mauris vel sapien pellentesque, pulvinar mi et, elementum diam. Donec consequat tempus libero, facilisis iaculis erat bibendum nec. Nam ut ultrices est. In non risus at odio iaculis finibus. In laoreet nulla urna, non posuere nisl semper non. Donec bibendum venenatis facilisis.

            In hac habitasse platea dictumst. Aliquam sollicitudin eu felis ut pretium. Proin porta volutpat sollicitudin. Sed sodales nulla vel suscipit dignissim. Nulla vitae purus lectus. Etiam hendrerit elit velit, in gravida tellus consectetur fermentum. Phasellus lobortis consectetur ipsum eget sodales. Suspendisse commodo efficitur magna eget sodales. Quisque id pulvinar risus. Praesent dolor massa, elementum lacinia nunc ac, pharetra laoreet sapien. Ut volutpat, augue vitae consectetur facilisis, magna est fringilla dui, non euismod metus magna ac metus. Nullam vehicula turpis eu orci porttitor scelerisque. Vestibulum posuere vulputate tincidunt. Pellentesque ac condimentum augue. Integer pharetra ullamcorper tortor vel congue. Curabitur pharetra dictum nibh eget tempus.

            Suspendisse in feugiat ex. Donec risus ex, tincidunt at varius vitae, pellentesque ac lacus. Fusce feugiat ex et neque convallis, ut aliquet ex maximus. Vestibulum fringilla, massa sed eleifend auctor, leo dui hendrerit sem, ut pulvinar lorem dolor nec tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam cursus finibus ligula, sed efficitur mauris molestie ac. Phasellus dapibus ligula sit amet efficitur venenatis. Donec tempus ultrices turpis sed sodales. Ut feugiat nisi erat, et sodales neque dictum sit amet.

            Morbi dapibus gravida orci, vel ultrices nisl aliquam ut. Morbi fringilla enim non turpis ultricies, id eleifend magna faucibus. Mauris mattis consectetur porta. Phasellus tellus enim, lobortis et tortor sed, molestie scelerisque dolor. Vivamus tincidunt neque non quam tristique, vitae finibus dui bibendum. Nulla lacinia ligula id ex porta, eget scelerisque metus mattis. Nunc nec justo tristique, convallis orci sit amet, bibendum magna. Vivamus sapien odio, interdum id tellus quis, malesuada lacinia elit. Nulla consequat mauris ut feugiat hendrerit. Morbi sit amet magna et sapien efficitur feugiat. Donec quis elementum tortor. Integer nec eros est. Vivamus vehicula felis id odio porta lacinia. Curabitur dictum tellus tellus, quis ullamcorper odio convallis sit amet. Proin porta, tortor quis semper consectetur, lectus nibh pellentesque erat, eget cursus felis mauris et turpis.
          </div>
        </ScrollArea>
      </div>
    )
  }
}


render(
  <Test />,
  document.getElementById( 'app' )
);
