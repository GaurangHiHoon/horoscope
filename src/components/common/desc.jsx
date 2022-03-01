const Description = ({name,data}) => {
    return ( <>
      <div className="mb-2">
            <strong> {name}</strong>
            {data}
          </div>
    </> );
}
 
export default Description;