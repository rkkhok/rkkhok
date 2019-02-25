import React from 'react';

import { Col, Form, FormGroup, Label, Input, FormFeedback, Table } from 'reactstrap';

import { css } from 'react-emotion';

const highlightStyle = css`
  background-color: #77133f;
  color: white;
  font-weight: 500;
`;

const StudentScholarShipCard = ({
  students, render, keys, highlight,
}) => {
  if (!render) {
    return null;
  }

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            {keys.map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {highlight[0] ? (
            <tr className="highlight">
              <th scope="row">{highlight[0]}</th>
              {highlight.slice(1).map((f, i) => (
                <td key={i}>{f}</td> // eslint-disable-line react/no-array-index-key
              ))}
            </tr>
          ) : (
            ''
          )}

          {highlight[0] ? (
            <tr>
              <td colSpan={7} className="text-center">
                A csoportod többi tagjának adatai
              </td>
            </tr>
          ) : (
            ''
          )}

          {students.map(student => (
            <tr key={student[0]} className={student[0] === highlight[0] ? highlightStyle : ''}>
              <th scope="row">{student[0]}</th>
              {student.slice(1).map((f, i) => (
                <td key={i}>{f}</td> // eslint-disable-line react/no-array-index-key
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

class ScholarShipTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      selectedStudents: this.props.values,
      currentStudent: [],
      isValidValue: null,
      canRender: true,
    };
  }

  updateInputValue = (evt) => {
    const nkEntry = evt.target.value.toUpperCase();
    this.setState({ inputValue: nkEntry });
    if (nkEntry.length === 6) {
      const currentStudent = this.props.values.filter(d => d[0] === nkEntry)[0];

      if (!currentStudent) {
        this.setState({
          selectedStudents: [],
          currentStudent: [],
          canRender: true,
          isValidValue: false,
        });
      } else {
        const group = currentStudent[1];

        const p = this.props.values.filter(d => d[1] === group);
        if (p.length) {
          this.setState({
            selectedStudents: p,
            currentStudent,
            isValidValue: true,
            canRender: true,
          });
        } else {
          this.setState({
            selectedStudents: [],
            currentStudent: [],
            isValidValue: false,
            canRender: true,
          });
        }
      }
    } else if (nkEntry.length === 0) {
      this.setState({
        selectedStudents: this.props.values,
        currentStudent: [],
        isValidValue: true,
        canRender: true,
      });
    }
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup row>
            <Label for="neptunKod" sm={2} size="lg">
              Neptun kód
            </Label>
            <Col sm={10}>
              <Input
                value={this.state.inputValue}
                onChange={this.updateInputValue}
                type="text"
                name="neptunKod"
                id="neptunKod"
                bsSize="lg"
                valid={this.state.isValidValue}
              />
              <FormFeedback>Ismeretlen neptun kód</FormFeedback>
            </Col>
          </FormGroup>
        </Form>

        <StudentScholarShipCard
          render={this.state.canRender}
          students={this.state.selectedStudents}
          keys={this.props.keys}
          highlight={this.state.currentStudent}
        />
      </div>
    );
  }
}

export default ({ keys, values }) => <ScholarShipTable keys={keys} values={values} />;
