export const MainLoader = () => {
    return (
        <div className="spinner"></div>
    )
}

export const SmallLoader = () => {
    return (
        <div className="spinner-small"></div>
    )
}


export const MiniLoader = () => {
    return (
        <div className="spinner-mini"></div>
    )
}


export const FullPageLoader = () => {
    return (    
        <div className="w-full h-screen flex overflow-y-hidden items-center justify-center">
            <MainLoader />
        </div>
    )
}


export const SmallSubmitLoader = () => {
    return <div className="w-full h-24 flex items-center justify-center">
      <SmallLoader />
    </div>;
  }