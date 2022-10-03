// 어레이처럼, 오브젝트도 비원시 자료다.

const star = { name: 'Tarzan'}
const star2 = star
star2['friend'] = star
star2['friend']['lover'] = 'jane'

/*

{
    name: 'Tarzan'
    lover: 'jane'
    friend: object {name: 'Tarzan'
                    lover: 'jane'}
}

{
    name: 'Sarah'
    lover: 'jane'
    friend: object {name: 'Sarah'
                    lover: 'jane'}
}

*/

const allStars = [star, star2]
allStars[0]['lover'] = allStars[1]['name']

/*

{
    [name: 'Sarah'
    lover: 'Sarah'
    friend: object {name: 'Sarah'
                    lover: 'jane'}]
    ,[{name: 'Sarah'
                    lover: 'jane'}]
}

*/