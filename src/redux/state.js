export let  store = {
    _state: {
        profilePage: {

            posts: [
                {id: 1, message: 'Hello world', likeCount: 22},
                {id: 2, message: 'What happened?', likeCount: 666},
                {id: 3, message: 'Im here!', likeCount: 33}],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Gupik', ava:'https://toppng.com/uploads/preview/pusheen-eating-pizza-11549658763y8nkdaf5cj.png'},
                {id: 2, name: 'Andrey', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYu0PIY_S8LOnc3jG1cGhlP2hm142QO3WgA&usqp=CAU'},
                {id: 3, name: 'Toha', ava: 'data:image/jpeg;base64,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'},
                {id: 4, name: 'Natasha', ava:'data:image/jpeg;base64,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'},
                {id: 5, name: 'Nastya', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DTxL39p2Bd2cOFfc03OzpBY-GrWjFSctqQ&usqp=CAU'}],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are u?'},
                {id: 3, message: 'Lets rock'},
                {id: 4, message: 'Who are u?'},
                {id: 5, message: 'Pfffff, okey'}
            ]
        }
    },
    getState () {
        debugger
        return this._state
    },
    _callSubscriber () {
        console.log('state changed')
    },
    subscribe(observer){
        this._callSubscriber=observer
    },
    addPost () {
        let newPost={id: 123,
            message: this._state.profilePage.newPostText,
            likeCount: 0}
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText=''
        this._callSubscriber(this._state)
    },
    UpdateNewPostChange (newText) {
        this._state.profilePage.newPostText=newText
        this._callSubscriber(this._state)
    },
    addMessage(text){
        let newMessage={id: 111,
            message: text}
        this._state.dialogsPage.messages.push(newMessage)
        this._callSubscriber(this._state)
    }
}

window.store=store