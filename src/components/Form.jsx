


export default function From({ headleSubmit, newTitle, setNewTitle }) {


    return (
        <div className="container pt-3">
            <form className="row g-3 needs-validation" onSubmit={headleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title Article</label>
                    <input
                        type="text"
                        className="form-control"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        id="title"
                    />
                </div>

                <div className="col-2">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}