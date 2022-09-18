export default function Launch(props){

    let {launch} = props

    return(
        <div className={'launch'}>
            <p>{launch.mission_name}</p>
            <p>{launch.launch_year}</p>
            <img src={launch.links.mission_patch_small} alt={launch.missoin_name}/>
        </div>
    )

}