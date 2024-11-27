import type { SignatureProps } from "@/types"

export const SecondStyle = ({
	email,
	linkedIn,
	location,
	logo,
	name,
	position,
	skype,
	tel,
	website
}: SignatureProps) => {
	return (
		<table
			border={0}
			cellPadding='0'
			cellSpacing='0'
			style={{ fontFamily: "Arial, sans-serif, sans-serif", fontSize: 11, width: 440 }}>
			<tbody>
				<tr>
					<td style={{ width: 82 }} width='82'>
						<p style={{ margin: 0, padding: 0 }}>
							<a href='https://www.codetwo.com/email-signatures/' rel='noreferrer' target='_blank'>
								<img alt='Logo' src={logo} style={{ border: 0, height: "auto", width: 67 }} width='67' />
							</a>
						</p>
					</td>
					<td style={{ minWidth: 100 }}>
						<span
							style={{
								color: "#577d89",
								fontFamily: "Arial, sans-serif",
								fontSize: 11,
								fontWeight: " bold",
								lineHeight: "13px"
							}}>
							{name}
						</span>
						<span style={{ color: "#333333", fontFamily: "Arial, sans-serif", fontSize: 8, lineHeight: "12px" }}>
							<br />
							{position}
						</span>

						<p
							style={{
								fontFamily: "Arial, sans-serif",
								fontSize: 8,
								lineHeight: "13px",
								marginBottom: 0,
								marginTop: 0,
								padding: 0
							}}>
							<a href={website} style={{ color: "#577d89", fontWeight: "bold", textDecoration: "none" }}>
								<span
									style={{
										color: "#577d89",
										fontFamily: "Arial, sans-serif",
										fontSize: 8,
										fontWeight: "bold",
										lineHeight: "13px",
										textDecoration: "none"
									}}>
									{website}
								</span>
							</a>
						</p>

						<p style={{ marginBottom: 0, marginTop: 10, padding: 0 }}>
							<span>
								<a href={linkedIn} rel='noopener noreferrer' target='_blank'>
									<img
										alt='linkedin icon'
										src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1656311872/Icons/linkedin_mae6bz.png'
										style={{ border: 0, display: "inline", height: 16, width: 16 }}
										width='16'
									/>
								</a>
								&nbsp;
							</span>
							<span>
								<a href={skype} rel='noopener noreferrer' target='_blank'>
									<img
										alt='skype icon'
										src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1657093589/Icons/skype_dk1fqm.png'
										style={{ border: 0, display: "inline", height: 16, width: 16 }}
										width='16'
									/>
								</a>
								&nbsp;
							</span>
						</p>
					</td>
					<td style={{ borderRight: "1px solid #577d89", width: 10 }} />
					<td style={{ width: 10 }} />
					<td style={{ minWidth: 100 }}>
						<p
							style={{ fontFamily: "Arial, sans-serif", fontSize: 8, lineHeight: "14px", marginBottom: 0, padding: 0 }}>
							<span style={{ fontFamily: "Arial, sans-serif", fontSize: 8, lineHeight: "14px" }}>
								<span style={{ color: "#333333", fontSize: 8, lineHeight: "13px" }}>
									<strong>E:</strong>
								</span>
								<a href='mailto:{email}' style={{ color: "#333333", fontSize: 8, textDecoration: "none" }}>
									<span
										style={{
											color: "#333333",
											fontFamily: "Arial, sans-serif",
											fontSize: 8,
											lineHeight: "14px",
											textDecoration: "none"
										}}>
										{email}
									</span>
								</a>
								<span>
									<br />
								</span>
							</span>
							<span>
								<span style={{ color: "#333333", fontSize: 8 }}>
									<strong>T:</strong>
								</span>
								<span style={{ color: "#333333", fontSize: 8 }}> {tel}</span>
								<span>
									<br />
								</span>
							</span>
							<span>
								<span style={{ color: "#333333", fontSize: 8 }}>
									<strong>A:</strong>
								</span>
								<a color='#333333' href={location?.href} style={{ textDecoration: "none" }}>
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
