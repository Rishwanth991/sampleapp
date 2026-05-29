function Tdata()
{
    let empdata=[
          {"eno":101,"ename":"Rishwanth","job":"Developer","sal":80000.00},
           {"eno":102,"ename":"Rohith","job":"Tester","sal":70000.00},
            {"eno":103,"ename":"kaya-kalyan","job":"Hr","sal":50000.00},
             {"eno":104,"ename":"vishwanth","job":"manager","sal":60000.00},
              {"eno":105,"ename":"manishwar","job":"Tester","sal":70000.00},


          


    ];

    return(
        <div>
            <h1>Enmployee-Information</h1>
            <hr/>
            <table width="100%"border={1}>
                <tr>
                    <th>Emp no</th>
                    <th>Emp name</th>
                    <th>Emp job</th>
                    <th>Emp salary</th>
                </tr>
                {
                    empdata.map((emp)=>(
                        <tr>
                            <td>{emp.eno}</td>
                              <td>{emp.ename}</td>
                                <td>{emp.job}</td>
                                  <td>{emp.sal}</td>

                        </tr>
                    ))
                }

            </table>

        </div>
    );
}
export default Tdata;