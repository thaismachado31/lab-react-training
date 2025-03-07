import 'bootstrap/dist/css/bootstrap.min.css';
import './Component.css';

function IdCard(props) {
  const idInfo = [
    { title: 'First name:', info: props.firstName },
    { title: 'Last name:', info: props.lastName },
    { title: 'Gender:', info: props.gender },
    { title: 'Height:', info: props.height / 100 + 'm' },
    { title: 'Birth:', info: props.birth.toDateString() },
  ];

  return (
    <div className="card">
      <div>
        <img className="imgProfile" src={props.picture} alt={props.firstName} />
      </div>
      <div>
        {idInfo.map((currentInfo) => {
          return (
            <p className="text">
              <strong>{currentInfo.title}</strong> {currentInfo.info}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default IdCard;
