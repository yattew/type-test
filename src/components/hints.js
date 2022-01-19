function ShortCuts({hints}){
    return <div className="hints">
        <ul>
            {
                hints.map((item,idx)=><li key={idx}>{item}</li>)
            }
        </ul>
    </div>
}

export default ShortCuts;