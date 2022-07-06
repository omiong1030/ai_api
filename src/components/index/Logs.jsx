import React, { useEffect } from 'react'
import "../../css/index/logs.css"

export const Logs  = () => {

    // const sqlite3 = require("sqlite3");
    // const db = new sqlite3.Database("./logs.db");

    useEffect(() => {
            var r_end = 100;  // 行数
            var c_end = 5;  // 列数
            var array = ["Date", "ID", "Task", "Model", "Status"];
            var flag = true;
            var i = 0;

            var table = document.createElement("table");
            var thead = document.createElement("thead");
            table.id = "logTable";

            for (var r = 1; r <= r_end; r++) {
                var tr = document.createElement("tr");
                for (var c = 1; c <= c_end; c++) {
                    if (flag) {
                        var th = document.createElement("th");
                        th.innerHTML = array[i]
                        tr.appendChild(th);
                        i += 1;
                    } else {
                        var td = document.createElement("td");
                        tr.appendChild(td);
                    }
                }
                if (r === 1) {
                    thead.appendChild(tr);
                    table.appendChild(thead);
                    var tbody = document.createElement("tbody");
                } else {
                    tbody.appendChild(tr);
                }
                flag = false;
            }
            table.appendChild(tbody);
            document.getElementById("logsTable").appendChild(table);
            document.getElementById("logTable").classList.add("logTable");
        }
    )

  return (
      <React.Fragment>
        <div className="logsTitle">
            <h1>
                Logs
            </h1>
          </div>
          <div id="logsTable" className="logsTable">
          </div>
      </React.Fragment>
  )
}