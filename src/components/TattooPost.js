import './TattoPost.css';
function TattooPost(props){
    const {tattoo , onBgClick} = props;
    return(
        <div class="tattoo-post">
            <div class="tattoo-post-bg" onClick={onBgClick}>
            <div class="tattoo-post-content">
                <img src={tattoo.thumbnailUrl}/>
                <h4>{tattoo.title}</h4>
            </div>
            </div>
        </div>
    );

}
export default TattooPost;