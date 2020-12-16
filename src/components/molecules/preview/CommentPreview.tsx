import React, { Component } from 'react'
import { Comment } from '../../../rest/data/posts';
import StatsPreview from './StatsPreview';
import UserProfilePreview from './UserProfilePreview';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import * as NkReactLibrary from 'nk-react-library';
import NkCard from '../../atoms/NkCard';
import MyValueComponent from '../../atoms/MyValueComponent';
import { Utils } from 'nk-js-library';
import MyAddressText from '../../atoms/MyAddressText';
import MyIcon from '../../atoms/MyIcon';

export default class CommentPreview extends Component<{
    comment: Comment
}> {
    render() {
        const comment: Comment = this.props.comment;
        return (
            <NkCard isLink to={`/post/${comment.data.postId}/comment/${comment.data._id}`} style={{
                minWidth: '40vw',
                width: '100%'
            }}>
                <Card.Body>
                    <Row>
                        <Col xs='auto' className='text-center'>
                            <NkReactLibrary.Components.Commons.NkLocalizeText text={comment.data.context.toUpperCase()} />
                            <br />
                            <MyValueComponent values={[{
                                singular: 'score',
                                plural: 'score',
                                value: comment.data.stats.score,
                                variant: 0
                            }]} />
                        </Col>
                        <Col>
                            <Card.Title>
                                <NkReactLibrary.Components.Commons.NkRichTextContainer html={comment.data.content} />
                            </Card.Title>
                            <Card.Text>
                                {/* <StatsPreview type='post' {...comment.data.stats}/> */}
                                <p><MyAddressText location={comment.data.location} /></p>
                                <p><MyIcon type='clock' /> <NkReactLibrary.Components.Commons.NkLocalizeText text={Utils.CommonUtils.timeContextualize(new Date(comment.data.createdAt))} /> </p>
                                <UserProfilePreview {...comment.data.author} small={true} />
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </NkCard>
        )
    }
}
