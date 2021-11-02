import React, { useContext } from 'react';
import { ThemeContext } from 'context/theme.context';
import "./content.css";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme ? "content dark" : "content light"}>
      <h1>Nam rhoncus arcu a convallis finibus</h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus arcu a convallis finibus. Sed auctor suscipit hendrerit. Maecenas bibendum enim vel lorem vehicula, in luctus metus rutrum. Maecenas ut commodo velit, vestibulum laoreet urna. Mauris id imperdiet odio. Curabitur vulputate metus eget nisl facilisis, in viverra erat interdum. Quisque aliquet quis tellus nec rhoncus. Phasellus sed est at ante venenatis commodo a eu mauris. Maecenas laoreet, erat non mollis tempor, tellus mauris porta libero, et rutrum leo nulla ut velit.
      Mauris turpis lacus, tincidunt a erat quis, finibus interdum libero. Sed mauris metus, tempor vitae arcu ac, accumsan consectetur velit. Mauris aliquet nibh elit, ut rutrum augue gravida in. Fusce placerat diam in libero scelerisque congue. Sed eu imperdiet neque, tempus sollicitudin ex. Pellentesque venenatis condimentum nulla interdum pulvinar. Vestibulum cursus tellus ex, et viverra ligula sagittis at. Sed at elementum mauris, id euismod tortor. Phasellus eget tincidunt felis.
      Aliquam erat volutpat. Nulla mauris nisi, vulputate eu leo quis, dignissim fermentum ligula. Donec sit amet nulla at felis sagittis hendrerit. In suscipit urna elit, sed cursus lectus aliquam id. Suspendisse non erat vitae sapien viverra tincidunt. Cras in arcu vitae ipsum tempus maximus a eu magna. Ut ut efficitur leo. Etiam sit amet ultricies neque. Donec interdum elementum tempus. Proin finibus, arcu eu pellentesque varius, sapien turpis pharetra nisl, id feugiat diam diam ut est. Mauris nec tempor est, eget ullamcorper ligula. Duis semper fermentum risus vel dapibus. Donec id nunc viverra, vulputate lectus in, consectetur lacus. Vivamus venenatis lectus non nisi laoreet, id congue libero vehicula.
    </div>
  )
}

export default Content;
