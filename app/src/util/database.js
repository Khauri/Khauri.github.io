/**
 * Database functions
 */
import firebase from 'firebase'

const colls = {
    POSTS : 'posts'
}

// Formats the error message.
// Might change the implementation
function error(message="An error occured", status = 400){
    return {error: {status, message}, article : null}
}

export const DB = new class Database {
    async listArticles(){
        let query = firebase.firestore()
            .collection(colls.POSTS)
        let snap = await query.get()
        return snap.docs.map(doc=>({
            id:doc.id, ...doc.data()
        }))
    }

    async getArticleBySlug(slug){
        if(!slug){
            return error('Slug not provided')
        }
        let snap = await firebase.firestore()
            .collection(colls.POSTS)
            .where('slug', '==', slug.toLowerCase())
            .get()
        if(snap.empty){
            return error('Article not found', 404)
        }
        let article = await snap.docs[0].data()
        return { error : null, article : { id : snap.docs[0].id, ...article} }
    }

    async updateArticle(id, data){
        if(!id){
            return error('Missing article id')
        }
        try {
            console.log(data)
            await firebase.firestore().collection(colls.POSTS).doc(id).update(data)
        }catch(error){
            console.log(error)
            return error(error)
        }
    }
}