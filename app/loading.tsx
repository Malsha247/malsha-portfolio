export default function Loading() {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader-logo">
          &lt;M /&gt;
        </div>

        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>

        <p>Loading portfolio...</p>
      </div>
    </div>
  );
}