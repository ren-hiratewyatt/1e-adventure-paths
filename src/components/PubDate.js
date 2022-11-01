const PubDate = ({ pubdate }) => {
  return (
    <div>
      <h3>Publishing Dates</h3>
      <p className="published">
        {pubdate.start} - {pubdate.end}
      </p>
    </div>
  )
}

export default PubDate
