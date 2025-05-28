import { client } from "@/services/contentful"
import { ref, onBeforeMount } from "vue"
import { useListAction } from "./useListAction"

export const useBlogs = () => {
    const blogs = ref([])
    const isLoading = ref(false)
    const error = ref(null)
    const { addItem, removeItem } = useListAction(blogs)

    const keys = ['slug', 'title', 'description', 'heroImage', 'publishDate']
    
    const takeFieldsFromEntries = (entries, keys) => {
        return entries.items.map(item => {
            const obj = {}
            keys.forEach(key => {
                if (item.fields.hasOwnProperty(key)) obj[key] = item.fields[key]
            })
            return obj
        })
    }

    const fetchData = async () => {
        isLoading.value = true
        
        try {
            const response = await client.getEntries({
                content_type: 'blogPost',
                order: '-fields.publishDate'
            })

            blogs.value = takeFieldsFromEntries(response, keys)
        } catch (err) {
            error.value = err
        } finally {
            isLoading.value = false
        }
    }

    onBeforeMount(fetchData)
    
    return { blogs, isLoading, error, addItem, removeItem }
}
