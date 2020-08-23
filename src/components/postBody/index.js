import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
    return (
        <div className="dev">
            <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    )
}
