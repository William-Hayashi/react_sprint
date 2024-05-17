from flask import request,Flask
import oracledb

app = Flask(__name__)

@app.route("/notas", methods=['POST'])
def nota():
    credenciais = {}
    with open("REACT/sprint_react/sprint/src/api/credencias.txt", 'r') as f:
        for line in f:
            key, value = line.strip().split("=")
            credenciais[key] = value

    USER = credenciais["user"]
    PASS = credenciais["pass"]

    dsnStr = oracledb.makedsn("oracle.fiap.com.br", 1521, "ORCL")
    connection = oracledb.connect(user=USER, password=PASS, dsn=dsnStr)
    cursor = connection.cursor()

    try:
        nota = request.form.get('nota')
        acessibilidade = request.form.get('acessibilidade')

        sql = "INSERT INTO T_SATISFACAO (nota, acessibilidade) VALUES (:1, :2)"
        cursor.execute(sql, [nota, acessibilidade])
        connection.commit()
        return {"message": "Nota registrada com sucesso!"}, 200
    except oracledb.DatabaseError as e:
        error, = e.args
        return {"error": f"Ocorreu um erro: {error.code} - {error.message}"}, 400
    finally:
        cursor.close()
        connection.close()


app.run(debug="True")