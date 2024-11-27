import type { SignatureProps } from "@/types"

export const SecondStyle = ({
	logo,
	website,
	name,
	position,
	location,
	linkedIn,
	skype,
	tel,
	email,
}: SignatureProps) => {
	return (
		<table
			style={{ width: 440, fontSize: 11, fontFamily: "Arial, sans-serif, sans-serif" }}
			cellSpacing='0'
			cellPadding='0'
			border={0}>
			<tbody>
				<tr>
					<td style={{ width: 82 }} width='82'>
						<p style={{ margin: 0, padding: 0 }}>
							<a href='https://www.codetwo.com/email-signatures/' target='_blank' rel='noreferrer'>
								<img alt='Logo' style={{ width: 67, height: "auto", border: 0 }} src={logo} width='67' />
							</a>
						</p>
					</td>
					<td style={{ minWidth: 100 }}>
						<span
							style={{
								fontFamily: "Arial, sans-serif",
								color: "#577d89",
								fontWeight: " bold",
								fontSize: 11,
								lineHeight: "13px",
							}}>
							{name}
						</span>
						<span style={{ fontFamily: "Arial, sans-serif", color: "#333333", fontSize: 8, lineHeight: "12px" }}>
							<br />
							{position}
						</span>

						<p
							style={{
								marginBottom: 0,
								marginTop: 0,
								padding: 0,
								fontFamily: "Arial, sans-serif",
								fontSize: 8,
								lineHeight: "13px",
							}}>
							<a href={website} style={{ color: "#577d89", textDecoration: "none", fontWeight: "bold" }}>
								<span
									style={{
										textDecoration: "none",
										fontSize: 8,
										lineHeight: "13px",
										color: "#577d89",
										fontFamily: "Arial, sans-serif",
										fontWeight: "bold",
									}}>
									{website}
								</span>
							</a>
						</p>

						<p style={{ marginBottom: 0, marginTop: 10, padding: 0 }}>
							<span>
								<a href={linkedIn} target='_blank' rel='noopener noreferrer'>
									<img
										src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656311872/Icons/linkedin_mae6bz.png'
										alt='linkedin icon'
										style={{ border: 0, height: 16, width: 16, display: "inline" }}
										width='16'
									/>
								</a>
								&nbsp;
							</span>
							<span>
								<a href={skype} target='_blank' rel='noopener noreferrer'>
									<img
										src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1657093589/Icons/skype_dk1fqm.png'
										alt='skype icon'
										style={{ border: 0, height: 16, width: 16, display: "inline" }}
										width='16'
									/>
								</a>
								&nbsp;
							</span>
						</p>
					</td>
					<td style={{ width: 10, borderRight: "1px solid #577d89" }} />
					<td style={{ width: 10 }} />
					<td style={{ minWidth: 100 }}>
						<p
							style={{ fontFamily: "Arial, sans-serif", padding: 0, fontSize: 8, lineHeight: "14px", marginBottom: 0 }}>
							<span style={{ fontFamily: "Arial, sans-serif", lineHeight: "14px", fontSize: 8 }}>
								<span style={{ color: "#333333", fontSize: 8, lineHeight: "13px" }}>
									<strong>E:</strong>
								</span>
								<a href='mailto:{email}' style={{ textDecoration: "none", color: "#333333", fontSize: 8 }}>
									<span
										style={{
											textDecoration: "none",
											fontSize: 8,
											lineHeight: "14px",
											color: "#333333",
											fontFamily: "Arial, sans-serif",
										}}>
										{email}
									</span>
								</a>
								<span>
									<br />
								</span>
							</span>
							<span>
								<span style={{ fontSize: 8, color: "#333333" }}>
									<strong>T:</strong>
								</span>
								<span style={{ fontSize: 8, color: "#333333" }}> {tel}</span>
								<span>
									<br />
								</span>
							</span>
							<span>
								<span style={{ fontSize: 8, color: "#333333" }}>
									<strong>A:</strong>
								</span>
								<a href={location?.href} color='#333333' style={{ textDecoration: "none" }}>
									{location?.label}
								</a>
							</span>
						</p>
					</td>
				</tr>
			</tbody>
		</table>
	)
}
