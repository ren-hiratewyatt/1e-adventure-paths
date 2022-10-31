const PubDate = ({ pubdate }) => {
  return (
    <p className="published">
      {pubdate.start} - {pubdate.end}
    </p>
  )
}

export default PubDate
