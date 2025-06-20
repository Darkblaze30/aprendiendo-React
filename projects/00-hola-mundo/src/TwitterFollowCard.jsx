export const TwitterFollowCard = ({ children, userName, name, isFollowing}) => {
    return(
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img
            className="tw-followCard-avatar"
             src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" />
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span className="tw-followCard.infoUserName">@{userName}</span>
            </div>
            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </header>
    </article>
    )
};
