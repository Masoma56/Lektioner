import Card from './Card'

export default function Cardlist({ robots}) {
    return (
       // step1{robots}
       step1(robots)
    )
}

function step1(robots) {

    return (
        <>
            <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
        </>
    )
}