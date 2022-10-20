export const templateEmail = userName => {
  const { HOST_FRONTEND } = process.env

  return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
		<center>
			<h2>Hi, ${userName}</h2>
			<br/>
			<b>
				Thank you for signing up for blog. Click on the link below to verify your email:
			</b>
			<br/>
			<br/>
			<a href="${HOST_FRONTEND}confirm-account">Confirm account</a>
			<br/>
			<br/>
			<b>
				This link will expire in 24 hours. If you did not sign up for a Render account,you can safely ignore this email.
			</b>
		</center>
	</body>
	</html>`
}
