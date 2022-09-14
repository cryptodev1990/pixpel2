import React, {useEffect, useState} from "react";

const TokenDropdownInput = (props) => {
	const [showDropDown, setShowDropDown] = useState(false);
  const [selectedContent, setSelectedContent] = useState(props.initialContent);

  useEffect(() => {
    setSelectedContent(props.initialContent);
  },[props.initialContent])
  
  const handleDropDown = () => {
    if(showDropDown){
      setShowDropDown(false);
    } else {
      setShowDropDown(true);
    }    
  }
  const selectHandleClick = (content) => {
    setSelectedContent(content);
    setShowDropDown(false);
  }
  return(
    <div className="flex flex-row items-center w-full h-16 rounded-md bg-app-black-button">
      <div className="flex-none">
        <div className={ (showDropDown ? "rounded-t-md" : "rounded-md")  + " bg-app-black-button"} onClick={handleDropDown}>
          <div className="flex flex-row h-16 px-5 py-5">
            <div className="flex flex-row">
              <img src={selectedContent.url} alt=""/>
              <div className="mx-1 text-base font-medium">
                {selectedContent.title}
              </div>
            </div>
            <div className="flex">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="relative">  
            { 
              showDropDown === true ? (
                <div className="absolute inset-0 z-10">
		    	  	    <div
		    	  	    	className="fixed inset-0 w-full h-full"
                    onClick={handleDropDown}
		    	  	    ></div> 
                    <div className="flex flex-col w-64 rounded-b-md bg-app-black-button">
                      {
                        props.contentList.map( (content, idx) => {
                          return(
                            <div key={idx} className={(idx === props.contentList.length-1 ? " " : " border-b-2 border-gray-500 ") + " relative flex flex-row items-center justify-start gap-5 px-5 py-3"}
                                 onClick={() => {selectHandleClick(content)}}
                                 >
                              <img className="h-6" src={content.url} alt=""/>
                              <div className="text-base font-medium">
                                {content.title}
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                </div>
              ) : null
            }
        </div>
      </div>
      </div>
      <div className="flex">
        <svg className="w-10 h-10 -ml-5 text-gray-500" width="10" height="10" viewBox="0 0 24 24" 
             strokeWidth="2" stroke="currentColor" fill="none" 
             strokeLinecap="round" strokeLinejoin="round">  
          <path stroke="none" d="M0 0h24v24H0z" />  
          <line x1="12" y1="5" x2="12" y2="19" />
        </svg>
      </div>
      <div className="flex-auto">
        <input className="w-full bg-app-black-button"/>
      </div>
        {props.Max ? (<div className="flex mx-5 text-blue-500">Max</div>) : null}
      
		</div>
  )
}

export default TokenDropdownInput;