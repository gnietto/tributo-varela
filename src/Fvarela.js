import React from 'react';
import { Grid, Image, Container, Header, Divider } from 'semantic-ui-react';
import {PubPercepcionInsectos, PubAutopoiesis, PubBiologiaConocimiento, PubIdentidadSistemica, PubNeurofenomenologia} from './Pubs';
import varela from './img_fvarela_square.jpg';

function Fvarela(props){
	return (
	<>
		<Header as='h1' textAlign='centered'> Memorial Tributo a Francisco Varela </Header>
		<Header as='h3' textAlign='centered'>Chile, 1946 -- Francia, 2001</Header>
		<Grid padded>
			<Grid.Row>
				<Grid.Column width={8} textAlign='justified'>
					<Image src={varela} size='medium' centered circular />
					<blockquote> "His contributions to our knowledge are already remarkable for their originality, number and significance. As time goes on, the perceived noteworthiness of his work will no doubt increase, as will a belated appreciation of how much his death has cost us all" -- Randall Whittaker </blockquote>
					<blockquote> "Unless we accept that at this point in intellectual and scientific history that some radical re-learning is necessary, we cannot hope to move forward in the compulsive history of the ambivalent rejection-fascination with consciousness in philosophy of mind and cognitive science. My proposal implies that every good student of cognitive science who is also interested in issues at the level of mental experience, must inescapably attain a level of mastery in phenomenological examination in order to work seriously with first-person accounts [...] But this is not a betrayal of science: it is a necessary extension and complement. Science and experience constrain and modify each other as in a dance. This is where the potential for transformation lies. It is also the key for the difficulties this position has found within the scientific community. It requires us to leave behind a certain image of how science is done, and to question a style of training in science which is part of the very fabric of our cultural identity" -- Francisco Varela (1996)</blockquote>
				</Grid.Column>
				<Grid.Column width={8}>					
					<Header as='h2'> Reseña </Header>
					<Divider />
					<p>Francisco Varela nació en Chile el 7 de Septiembre de 1946. Durante su existencia terrenal creó la vida de 4 hijos, siendo la actriz Leonor Varela la más conocida entre ellos. Francisco falleció en París el 28 de Mayo de 2001 a la edad de 54 años. Las causas de su deceso expuestas son discordantes entre sí. Recibió por primera vez reconocimiento de la comunidad científica internacional en la década de 1970 debido a la co-creación del concepto de autopoiesis en trabajo conjunto con el biólogo Humberto Maturana.</p>
					<p>La comunidad científica internacional de la época comenzó a referirse al trabajo estos dos científicos chilenos con el nombre de "La Escuela de Santiago". Las publicaciones "Principles of Biological Autonomy" y "Autopoiesis and Cognition" desde entonces son consideradas textos centrales en el estudio de la biología del conocimiento y la teoría de la autopoiesis.</p> 
					<p>En algún momento de la década de 1980, las opiniones científicas de ambos biólogos comenzaron a diverger. Francisco Varela se mantuvo produciendo bibliografía profusa en donde profundiza en las implicancias de la teoría de la autopoiesis y de la teoría de sistemas de segundo orden aplicada a sistemas biológicos. La relevancia de sus aportes lo llevaron a asumir el cargo de Director de Investigación del Centro Nacional de Investigaciones Científicas (Centre National de la Recherche Scientifique, CNRS) en Francia desde el año 1988 hasta 2001, año en que se produciría su deceso.</p>
					<p>La evolución de su pensamiento, considerando sus papers, libros y entrevistas que otorgó en vida, puede resumirse en cinco etapas relativamente bien delimitadas: la percepción de colores en insectos, la producción de la teoría de la autopoiesis, el desarrollo de la biología del conocimiento, los trabajos en redes cognitivas (por ejemplo, la red inmunológica), y la creación del campo de la neurofenomenología, cuyos resultados se acercan a la posición de la doctrina budista. </p>
					<p>Mi tributo a la figura de Francisco Varela consistirá en clasificar la totalidad posible de su bibliografía científica de acuerdo a las etapas de la evolución de su pensamiento. Dada la relevancia de su trabajo, esperamos que las personas de nuestra audiencia lean al menos uno de los textos mencionados en forma completa. Si esta condición se cumple en alguno de los lectores, entonces mi propósito de mantener viva su memoria y su trabajo habrá cumplido su cometido.</p>
											
					
				</Grid.Column>
			</Grid.Row>

			<Grid.Row>
				<Grid.Column width={16}>
					<Container>
						<PubPercepcionInsectos />
					</Container>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row>
				<Grid.Column width={16}>
					<Container>
						<PubAutopoiesis />
					</Container>
				</Grid.Column>
			</Grid.Row>
				
			<Grid.Row>
				<Grid.Column width={16}>
					<Container>
						<PubBiologiaConocimiento />
					</Container>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row>
				<Grid.Column width={16}>
					<Container>
						<PubIdentidadSistemica />
					</Container>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row>
				<Grid.Column width={16}>
					<Container>
						<PubNeurofenomenologia />
					</Container>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</>
	)
}

export default Fvarela;