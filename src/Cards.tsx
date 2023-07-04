interface CardProps {
    topic: string,
    imageUrl: string,
    title: string,
    authorName: string,
    authorUrl: string,
    createdOn: string,
    entryType: string,
    imageAlt: string,
}

const Card: React.FC<CardProps> = ({ topic, imageUrl, title, authorName = "Author", authorUrl, createdOn, entryType = "Entry Type", imageAlt }) => {
    const date = new Date(createdOn);
    createdOn = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="p-card--highlighted" style={{ boxShadow: "inset 0 3px 0 0 rgba(119,33,111,0.7), 0 0 6px rgba(0,0,0,0.2)" }}>
            <p className="p-text--small-caps">{topic}</p>
            <hr className="is-muted" />
            <div className="p-card__content">
                <img className="p-card__image" height="185" width="330" src={imageUrl} alt={imageAlt} />
                <h4>
                    <a href="#">{title}</a>
                </h4>
                <em><p className="u-left">By <a href={authorUrl}>{authorName}</a> on {createdOn}</p></em>
            </div>
            <hr className="is-muted" />
            <small>{entryType}</small>
        </div>
    );
}

export default Card;